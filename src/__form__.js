/**
 * 1. use form tag and name to get value.
 * ---> inside form use onSubmit and function name
 * ---> for prevent auto load use parameter_name.preventDefault()
 * ---> for getting value use parameter_name.target.name_of_the_input_field.value
 *
 * 2. Controlled field: use individual field state for each input field
 * 
 * 3. controlled element: one object holding all the input fields.
 * 
 * 4. Uncontrolled field: useRef to create a reference to the element and access
 *  by using like: nameRef.current.value
 * 
 * 
 */