export function HelloWorld() {
    const helloClass: string = "hello-world";
    const helloText: string = "Hello, World!";
    return (
        <div className={helloClass}>{helloText}</div>
    )
}

export function GoodbyeWorld() {
    const goodbyeClass: string = "goodbye-world";
    const goodbyeText: string = "Goodbye, World!";
    return (
        <div className={goodbyeClass}>{goodbyeText}</div>
    )
}