import React, { useState } from "react";

function HookCounterThree() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  console.log({ name });
  return (
    <form>
      <label>First Name</label>
      <input
        type="text"
        value={name.firstName}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      ></input>
      <label>Last Name</label>
      <input
        type="text"
        value={name.lastName}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      ></input>

      <h4>Your First name is = {name.firstName}</h4>
      <h4>Your Last name is = {name.lastName}</h4>
      <h4>{JSON.stringify(name)}</h4>
    </form>
  );
}
export default HookCounterThree;
