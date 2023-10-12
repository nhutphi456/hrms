import { gql } from "apollo-angular";

export const REGISTER = gql`
    mutation CreateUser($signupDto: SignupDto!) {
        createUser(signupDto: $signupDto)
    }
`