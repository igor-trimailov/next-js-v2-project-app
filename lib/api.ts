type FetcherParams<T> = {
    url: string;
    method: "GET" | "POST" | "PUT" | "DELETE";
    body?: T;
    json?: boolean;
};

const fetcher = async <T>({
    url,
    method,
    body,
    json = true,
}: FetcherParams<T>) => {
    const res = await fetch(url, {
        method,
        ...(body && { body: JSON.stringify(body) }),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    });

    if (!res.ok) {
        throw new Error("API error");
    }

    if (json) {
        const data = await res.json();
        return data.data;
    }
};

export const register = (user: AuthFormFields) => {
    console.log("register api");
    return fetcher<AuthFormFields>({
        url: "/api/register",
        method: "POST",
        body: user,
    });
};

export const signin = (user: AuthFormFields) => {
    console.log("signin api");
    return fetcher<AuthFormFields>({
        url: "/api/signin",
        method: "POST",
        body: user,
    });
};

export const createNewProject = async (name) => {
    return fetcher({
        url: "/api/project",
        method: "POST",
        body: { name },
        json: true,
    });
};
