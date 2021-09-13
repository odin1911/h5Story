# react-typescript-cheatSheet

学习 react 结合 typescript 的记录，未整理

[res](https://react-typescript-cheatsheet.netlify.app/)

- React.ReactNode
- React.ComponentProps
- React.ComponentPropsWithoutRef
- React.ComponentPropsWithRef
- `React.FormEvent<HTMLInputElement>`
- `React.ChangeEventHandler<HTMLInputElement>`
- React.SyntheticEvent
- react-hook-form and formik [link](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forms_and_events)

```js
  // typing on RIGHT hand side of =
  onChange = (e: React.FormEvent<HTMLInputElement>): void => {
    this.setState({ text: e.currentTarget.value });
  };
  // or
  // typing on LEFT hand side of =
  onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    this.setState({text: e.currentTarget.value})
  }
```

```js
  onSubmit={(e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };
    const email = target.email.value; // typechecks!
    const password = target.password.value; // typechecks!
    // etc...
  }}
```
