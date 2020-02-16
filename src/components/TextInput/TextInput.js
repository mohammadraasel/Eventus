import React from 'react'
import { Form } from 'semantic-ui-react'

const TextInput = ({ label, register, required, name, errors, ...rest }) => {
	return (
		<Form.Field>
			{label && <label htmlFor={name}>{label}</label>}
			<input
				id={name}
				name={name}
				ref={register({ required: required || false })}
				{...rest}
			/>
			{errors[name] && (
				<span style={{ color: 'red' }}>{name} is required.</span>
			)}
		</Form.Field>
	)
}

export default TextInput
