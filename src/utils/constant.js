const backendUrl=import.meta.env.VITE_BACKEND_URL;

// export const USER_API_END_POINT="http://localhost:8000/api/v1/user";
export const USER_API_END_POINT=`${backendUrl}/api/v1/user`;

// export const JOB_API_END_POINT="http://localhost:8000/api/v1/job";
export const JOB_API_END_POINT=`${backendUrl}/api/v1/job`;

// export const APPLICATION_API_END_POINT="http://localhost:8000/api/v1/application";
export const APPLICATION_API_END_POINT=`${backendUrl}/api/v1/application`;

// export const COMPANY_API_END_POINT="http://localhost:8000/api/v1/company";
export const COMPANY_API_END_POINT=`${backendUrl}/api/v1/company`;


console.log(backendUrl);