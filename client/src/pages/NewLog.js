import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import {Button, Error, FormField, Input, Label, Textarea} from "../styles";


function NewLog({user, setUser}) {
    const [title, setTitle] = useState("My Awesome Exercise");
    const [description, setDescription] = useState("");
    const [exerciseId, setExerciseId] = useState(null)
    const [repetitionCount, setRepetitionCount] = useState(null)
    const [repetitionType, setRepetitionType] = useState(null)
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();
     const [optionValue, setOptionValue] = useState("");

  const handleSelect = (e) => {
    console.log(e.target.value);
    setExerciseId(e.target.value);
  };



    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        fetch("/logs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                exercise_id: exerciseId,
                repetition_type: repetitionType,
                repetition_count: repetitionCount,
            }),
        }).then((r) => {
            setIsLoading(false);
            if (r.ok) {
                r.json().then((newlog) => {
                const logs = user.logs
                setRepetitionCount("")
                setRepetitionType("")
                setUser({...user, logs: [...logs, newlog]})
                console.log(newlog)
                })

            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        });
    }

    return (
        <Wrapper>
            <WrapperChild>
                <h2>Create Log</h2>

               
                <form onSubmit={handleSubmit}>
                    <FormField>
                    <select onChange={handleSelect}>
                        {user.exercises.map(item => {
                          return (<option value={item.id} key={item.id} >Logging my {item.title}</option>);
                     })}
                    </select>
                    </FormField>
                    
                    <FormField>
                        <Label htmlFor="repetitionCount">Repetition count</Label>
                        <Input
                            type="number"
                            id="repetitionCount"
                            value={repetitionCount}
                            onChange={(e) => setRepetitionCount(e.target.value)}
                        />
                    </FormField>
                    <FormField>
                        <Label htmlFor="repetitionType">Repetition type</Label>
                        <Input
                            type="text"
                            id="repetitionType"
                            value={repetitionType}
                            onChange={(e) => setRepetitionType(e.target.value)}
                        />
                    </FormField>
                    <FormField>
                        <Button color="primary" type="submit">
                            {isLoading ? "Loading..." : "Submit Log"}
                        </Button>
                    </FormField>
                    <FormField>
                        {errors.map((err) => (
                            <Error key={err}>{err}</Error>
                        ))}
                    </FormField>
                </form>
            </WrapperChild>
        </Wrapper>
    );
}

const Wrapper = styled.section`
  max-width: 1000px;
  margin: 40px auto;
  padding: 16px;
  display: flex;
  gap: 24px;
`;

const WrapperChild = styled.div`
  flex: 1;
`;

export default NewLog;
