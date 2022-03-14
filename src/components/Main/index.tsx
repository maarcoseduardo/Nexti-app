import { Mail } from "../Mail";
import { SearchTop } from "../SearchTop";

import { ContainerMain } from './styles';

export function Main() {

    return (
        <>
            <ContainerMain>
                <SearchTop />
                <Mail />
            </ContainerMain>
        </>
    )
}