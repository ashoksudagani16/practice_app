type GreetProps = {
  name?: string
}
export default function Greet(props: GreetProps) {
  return (
    <div>Hi {props.name}</div>
  )
}
