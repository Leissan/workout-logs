import React, {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import {useHistory} from "react-router-dom";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import {Button, Error, FormField, Input, Label, Textarea} from "../styles";

function UpdateLog({user, setUser}) {
    // const [exercise_id, setExerciseId] = useState(null)
    // const [repetitionCount, setRepetitionCount] = useState(null)
    // const [repetitionType, setRepetitionType] = useState(null)
    const [log, setLog] = useState(null)
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();
    const { id } = useParams()

    useEffect(() => {
        fetch(`/logs/${id}`)
            .then((r) => r.json())
            .then((r) => {
                setLog(r)
                console.log("!!!!!!!!!!!!")
                console.log(log)
                // console.log(log.description)
            });
    }, [])
    //use id to find the appropriate log -> user.logs, find the log there
    // map  with if else, if this is the one i wanna chnage : return obj
    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        fetch(`/logs/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                exercise_id: log.exercise_id,
                repetition_type: log.repetition_type,
                repetition_count: log.repetition_count,
            }),
        }).then((r) => {
            setIsLoading(false);
            if (r.ok) {
                history.push("/history");
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        });
    }

    const onChange = (field) => (event) => {

        setLog({ [field]: event.target.value })
        return event
    }

    return (
        <Wrapper>
            <WrapperChild>
                <h2>Update Log</h2>
                {log ?
                    <form onSubmit={handleSubmit}>
                        <FormField>
                            <Label htmlFor="exercise_id">Exercise ID</Label>
                            <Input
                                type="number"
                                id="exercise_id"
                                value={log.exercise_id}
                                onChange={onChange("exercise_id")}
                            />
                        </FormField>
                        <FormField>
                            <Label htmlFor="exercise_title">Exercise title</Label>
                            <Input
                                type="text"
                                id="exerciseTitle"
                                value={log.title}
                                disabled={true}
                            />
                        </FormField>
                        <FormField>
                            <Label htmlFor="exercise_description">Exercise description</Label>
                            <Textarea
                                id="description"
                                rows="5"
                                value={log.description}
                                disabled={true}
                            />
                        </FormField>
                        <FormField>
                            <Label htmlFor="repetitionCount">Repetition count</Label>
                            <Input
                                type="number"
                                id="repetitionCount"
                                value={log.repetition_count}
                                onChange={onChange("repetition_count")}
                            />
                        </FormField>
                        <FormField>
                            <Label htmlFor="repetitionType">Repetition type</Label>
                            <Input
                                type="text"
                                id="repetitionType"
                                value={log.repetition_type}
                                onChange={onChange("repetition_type")}
                            />
                        </FormField>
                        <FormField>
                            <Button color="primary" type="submit">
                                {isLoading ? "Loading..." : "Update Log"}
                            </Button>
                        </FormField>
                        <FormField>
                            {errors.map((err) => (
                                <Error key={err}>{err}</Error>
                            ))}
                        </FormField>
                    </form> : null
                }
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

export default UpdateLog;