export interface RegisterRequest {
    email: string;
    password_1: string;
    password_2: string;
}

export interface RegisterResponse {
    user: {
        id: number;
        username: string;
        email: string;
        first_name: string | null;
        last_name: string | null;
        phone_number: string | null;
        country_id: number | null;
        is_active: boolean;
    };
    token: {
        access_token: string;
        refresh_token: string;
    };
}

export interface ApiError {
    detail?: Array<{
        type: string;
        loc: string[];
        msg: string;
        input?: unknown;
    }>;
    message?: string;
}

export interface LoginRequest {
    email: string;
    password: string;
}

export interface LoginResponse {
    user: {
        id: number;
        username: string;
        email: string;
        first_name: string | null;
        last_name: string | null;
        phone_number: string | null;
        country_id: number | null;
        is_active: boolean;
    };
    token: {
        access_token: string;
        refresh_token: string;
    };
}