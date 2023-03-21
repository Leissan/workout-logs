import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import {Link} from "react-router-dom";
import styled from "styled-components";
import { Box, Button } from "../styles";
import UpdateLog from "../pages/UpdateLog";


function UpdateLogData({user}) {

    return (
        user.logs.map((log) => (
            
            <UpdateLog
            log_id={log.id}
            repetition_type={log.repetition_type}
            repetition_count={log.repetition_count}
            />
            
        ))
        
    );
}



export default UpdateLogData;
