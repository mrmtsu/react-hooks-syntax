import React, { useState } from 'react'

export const FormHook = () => {
  const [name, setName] = useState({ firstName: '', lastName: ''});

  const onChangeFirstName = (e) => {
    setName({ ...name, firstName: e.target.value});
  }

  const onChangeLastName = (e) => {
    setName({ ...name, lastName: e.target.value});
  }

  return (
    <div>
      <div>
        <p>Fist Name: - {name.firstName}</p>
        <p>Last Name: - {name.lastName}</p>
      </div>
      <form>
        <input
          type="text"
          value={name.firstName}
          onChange={onChangeFirstName}
        />
        <input
          type="text"
          value={name.lastName}
          onChange={onChangeLastName}
        />
      </form>
    </div>
  )
}
