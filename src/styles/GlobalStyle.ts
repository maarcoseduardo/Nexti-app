import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

:root {

    --blue-600: #024f97;
    --green-300: #4ead85;
    --grey-100: #f6f6f6;
    --grey-400: #4d4d4d;
    --grey-600: #36444c;
    --orange-600: #e94e0f;
    --purple-800: #650d84;
    --red-600: #dd475b;
    --yellow-700: #f39200;
    --white: #ffffff;
}

*   {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
        
    }


    html {
        @media (max-width: 1080px){
            font-size: 93.75%;
        }
        @media (max-width: 720px){
            font-size: 87.5%;
        }
    }

    button {
        border: none;
        box-shadow: none;
        background-color: transparent;
        cursor: pointer;
    }
`;
