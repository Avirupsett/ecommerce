import React,{useState} from "react";
import Form from "react-bootstrap/Form";
import { Card } from "react-bootstrap";
import UserAxios from "../../Axios/UserAxios";

const Login = () => {
    const {http,setuserToken} = UserAxios();
    const [email, setemail] = useState();
    const [pwd, setpwd] = useState();

  const handleLogin = () => {
    http.post('/userLogin',{email:email, password:pwd}).then((res)=>{
        setuserToken(res.data.user, res.data.access_token);
    })
  };
  return (
    <>
      <div className="d-flex my-5 justify-content-center">
        <Card className="py-4 px-3" style={{ width: "30rem" }}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" onChange={e=>setemail(e.target.value)} placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" onChange={e=>setpwd(e.target.value)} placeholder="Password" />
            </Form.Group>

            <div className="text-center">
              <button
                type="button"
                onClick={handleLogin}
                className="btn btn-outline-primary w-100"
              >
                Login
              </button>
            </div>
          </Form>
        </Card>
      </div>
    </>
  );
};

export default Login;
