
import { Button, Form, Input, Divider } from "antd";
import { UserOutlined, MailOutlined, LockOutlined } from "@ant-design/icons";
import { redirect } from "react-router-dom";

export const SignUpForm = () => {

  const [form] = Form.useForm();

  const handleFinish = (value: any) => {
    localStorage.setItem("user", JSON.stringify(value));
    alert("User Registered Successfully!");
    form.resetFields();
    redirect("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center from-purple-50 via-white to-blue-50 px-4 py-8">
      <div className="w-full max-w-md">
        {/* Signup Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Create Account
            </h1>
            <p className="text-gray-500 text-sm">
              Sign up to get started with your account
            </p>
          </div>

          <Form
            form={form}
            name="signup"
            layout="vertical"
            requiredMark={false}
            className="space-y-1"
            onFinish={handleFinish}
          >
            <Form.Item
              label={
                <span className="text-gray-700 font-medium">First Name</span>
              }
              name="firstName"
              rules={[
                { required: true, message: "Please input your first name!" },
              ]}
            >
              <Input
                prefix={<UserOutlined className="text-gray-400" />}
                placeholder="Enter your first name"
                size="large"
                className="rounded-lg"
              />
            </Form.Item>

            <Form.Item
              label={
                <span className="text-gray-700 font-medium">Last Name</span>
              }
              name="lastName"
              rules={[
                { required: true, message: "Please input your last name!" },
              ]}
            >
              <Input
                prefix={<UserOutlined className="text-gray-400" />}
                placeholder="Enter your last name"
                size="large"
                className="rounded-lg"
              />
            </Form.Item>

            <Form.Item
              label={<span className="text-gray-700 font-medium">Email</span>}
              name="email"
              rules={[
                { required: true, message: "Please input your email!" },
                { type: "email", message: "Please enter a valid email!" },
              ]}
            >
              <Input
                prefix={<MailOutlined className="text-gray-400" />}
                placeholder="Enter your email"
                size="large"
                className="rounded-lg"
              />
            </Form.Item>

            <Form.Item
              label={
                <span className="text-gray-700 font-medium">Password</span>
              }
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
                { min: 8, message: "Password must be at least 8 characters!" },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="text-gray-400" />}
                placeholder="Create a password"
                size="large"
                className="rounded-lg"
              />
            </Form.Item>

            <div className="mb-6">
              <p className="text-xs text-gray-500 leading-relaxed">
                By signing up, you agree to our{" "}
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-700 hover:underline"
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-700 hover:underline"
                >
                  Privacy Policy
                </a>
              </p>
            </div>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                className="w-full h-12 rounded-lg font-semibold text-base from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Sign Up
              </Button>
            </Form.Item>
          </Form>

          <Divider className="my-6">
            <span className="text-gray-400 text-xs">OR</span>
          </Divider>

          <div className="text-center">
            <span className="text-gray-600 text-sm">
              Already have an account?{" "}
              <a
                href="/login"
                className="text-blue-600 hover:text-blue-700 font-semibold hover:underline"
              >
                Sign in
              </a>
            </span>
          </div>
        </div>

        <p className="text-center text-gray-500 text-xs mt-6">
          Protected by industry-standard encryption
        </p>
      </div>
    </div>
  );
};
