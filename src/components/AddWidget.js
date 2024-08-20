import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addWidget } from '../actions';

function AddWidget({ category }) {
    const dispatch = useDispatch();
    const [newWidgetName, setNewWidgetName] = useState('');
    const [newWidgetText, setNewWidgetText] = useState('');

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onFormSubmit = async (userCredObj) => {
        const newWidget = {
            id: Date.now(),
            name: userCredObj.name,
            content: userCredObj.content,
            categoryId: category.id,
        };

        try {
            const response = await fetch('http://localhost:5000/add-widget', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newWidget),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            dispatch(addWidget(category.id, newWidget));
            setNewWidgetName('');
            setNewWidgetText('');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className='mt-5'>
            <Form className='mx-auto' onSubmit={handleSubmit(onFormSubmit)}>
                <Form.Group className='mb-4'>
                    <Form.Label>Widget Name</Form.Label>
                    <Form.Control type='text' placeholder='Enter Name' {...register('name', { required: true })} />
                </Form.Group>

                <Form.Group className='mb-4'>
                    <Form.Label>Widget Content</Form.Label>
                    <Form.Control type='text' placeholder='Enter Content' {...register('content', { required: true })} />
                </Form.Group>

                <p className='lead text-danger mt-5' style={{ fontFamily: 'sans-serif', fontSize: '15px' }}>
                    * Note : For a time being, As of now it creates a random widget with some random measures but with above mentioned name and content.
                </p>

                <div className='row row-cols-1 position-fixed' style={{ bottom: '20px', right: '20px' }}>
                    <div className='col-6'>
                        <Button type='button' variant='white' className='border-dark mx-auto d-block mt-5 w-100'>Cancel</Button>
                    </div>
                    <div className='col-6'>
                        <Button type='submit' variant='success' className='mx-auto d-block mt-5'>Confirm</Button>
                    </div>
                </div>
            </Form>
        </div>
    );
}

export default AddWidget;