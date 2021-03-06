import React, {useState,InputHTMLAttributes, useEffect, useRef, useCallback} from 'react';
import {IconBaseProps} from 'react-icons'
import {useField} from '@unform/core'

import {Container} from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    name: string;
    icon: React.ComponentType<IconBaseProps>;

}
const Input:React.FC<InputProps>  = ({name,icon:Icon,...rest}) =>{
    const inputRef = useRef<HTMLInputElement>(null)
    const {fieldName, defaultValue,error, registerField} = useField(name)
    const [isFocused, setIsFocused] = useState(false)
    const [isFilled, setIsFilled] = useState(false)
    useEffect(() =>{
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
        })
    }, [fieldName,registerField])

    const handleInputBlur = useCallback(() =>{
        setIsFocused(false)

    /*    if(inputRef.current?.value){
            setIsFilled(true)
        } else{
            setIsFilled(false)
        }*/

        setIsFilled(!!inputRef.current?.value)
    }, [])

    const handleInputFocus = useCallback(() =>{
        setIsFocused(true)
    }, [])

    return (
        <>
        <Container isFilled={isFilled} isFocused={isFocused}>
        {Icon && <Icon size={20} />}
        <input  {...rest} ref={inputRef}
        onFocus= {handleInputFocus} onBlur={handleInputBlur}
         />
         {error}
        </Container>
        </>
    )
}



export default Input
