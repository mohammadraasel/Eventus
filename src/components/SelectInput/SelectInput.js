import React from 'react'
import './select.scss'

export const Select = ({
	label,
	register,
	required,
	errors,
	options,
	name,
	...rest
}) => {
	return (
		<div className={`select__love ${name}-select`}>
			<label htmlFor={name}>{label}</label>
			<select
				id={name}
				name={name}
				ref={register({ required })}
				{...rest}
			>
				<option value='' hidden>
					Choose one
				</option>
				{options.map(opt => (
					<option key={opt.value} value={opt.value}>
						{opt.label}
					</option>
				))}
			</select>
			{errors[name] && (
				<span style={{ color: 'red' }}>{label} is required</span>
			)}
		</div>
	)
}
