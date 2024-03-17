import './styles/Welcome.css';
import {useEffect, useMemo, useState} from "react";
import {Link, useNavigate} from "react-router-dom";



export default function Welcome() {

    return <div>
        <Link to="Translator">
            <p>Транслятор</p>
        </Link>
    </div>
}