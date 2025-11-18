import {useState} from "react";
import { Button, Form, Input, Divider } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = () => {
        const userData = localStorage.getItem("user");

        if(!userData){
            alert("No User Found");
            return
        }
        
        const savedUser = JSON.parse(userData);

        if(savedUser.email === email && savedUser.password === password){
           navigate("/dashboard"); 
        }else{
            alert("User Not Found")
        }
    }

    return(
  <div className="min-h-screen flex items-center justify-center from-blue-50 via-white to-purple-50 px-4 py-8">
    <div className="w-full max-w-md">
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Welcome Back
          </h1>
          <p className="text-gray-500 text-sm">
            Sign in to continue to your account
          </p>
        </div>

        <Form
          name="login"
          initialValues={{ remember: true }}
          layout="vertical"
          requiredMark={false}
          className="space-y-1"
        >
          <Form.Item
            label={<span className="text-gray-700 font-medium">Email</span>}
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input
              prefix={<UserOutlined className="text-gray-400" />}
              placeholder="Enter your username"
              size="large"
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-lg"
            />
          </Form.Item>

          <Form.Item
            label={<span className="text-gray-700 font-medium">Password</span>}
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              prefix={<LockOutlined className="text-gray-400" />}
              placeholder="Enter your password"
              size="large"
              className="rounded-lg"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>

          <div className="flex items-center justify-between mb-6">

            <a
              href="#"
              className="text-sm text-blue-600 hover:text-blue-700 font-medium"
            >
              Forgot password?
            </a>
          </div>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              onClick={handleLogin}
              className="w-full h-12 rounded-lg font-semibold text-base from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-0 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Sign In
            </Button>
          </Form.Item>
        </Form>

        <Divider className="my-6">
          <span className="text-gray-400 text-xs">OR</span>
        </Divider>

        <div className="text-center">
          <span className="text-gray-600 text-sm">
            Don't have an account?{" "}
            <a
              href="/signup"
              className="text-blue-600 hover:text-blue-700 font-semibold hover:underline"
            >
              Sign up
            </a>
          </span>
        </div>
      </div>

      <p className="text-center text-gray-500 text-xs mt-6">
        By signing in, you agree to our Terms of Service and Privacy Policy
      </p>
    </div>
  </div>
)};

export default LoginPage;
