import React, { useState, useEffect } from 'react';
import { PerformanceModel } from "../model/PerformanceModel.ts";
import './form.css';

interface Option {
    value: string;
    label: string;
}

const Form: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [options, setOptions] = useState<Option[]>([]);
    const [performance, setPerformance] = useState<string>('');
    const [submitStatus, setSubmitStatus] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [isFormValid, setIsFormValid] = useState<boolean>(false);

    // New state for showing mandatory field errors
    const [nameError, setNameError] = useState<boolean>(false);
    const [emailError, setEmailError] = useState<boolean>(false);
    const [performanceError, setPerformanceError] = useState<boolean>(false);

    const base_url = 'http://16.171.32.98/';

    useEffect(() => {
        const fetchOptions = async () => {
            try {
                const response = await fetch(`${base_url}/tickets/performance`);
                const data: PerformanceModel[] = await response.json();
                const options: Option[] = [];
                data.forEach(performance => {
                    options.push({ value: performance.name.en, label: performance.name.ar });
                });
                setOptions(options);
            } catch (error) {
                console.error('Error fetching options:', error);
            }
        };

        fetchOptions();
    }, []);

    // Check if the form is valid (all fields are filled)
    useEffect(() => {
        if (name && email && performance) {
            setIsFormValid(true);
        } else {
            setIsFormValid(false);
        }
    }, [name, email, performance]);

    // Handlers for blur events to show "This field is mandatory"
    const handleNameBlur = () => {
        if (!name) setNameError(true);
        else setNameError(false);
    };

    const handleEmailBlur = () => {
        if (!email) setEmailError(true);
        else setEmailError(false);
    };

    const handlePerformanceBlur = () => {
        if (!performance) setPerformanceError(true);
        else setPerformanceError(false);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!performance) {
            setSubmitStatus('No performance has been selected');
            return;
        }

        const payload = {
            name: name,
            email: email,
            performance: performance,
        };

        setLoading(true); // Disable the button by setting loading to true
        setSubmitStatus(''); // Reset the status message before submitting

        try {
            const response = await fetch(`${base_url}/tickets/reservation`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            const data = await response.json();

            if (response.status === 400) {
                const error_message = data['email'] || data['performance'];
                setSubmitStatus(error_message);
            } else {
                setSubmitStatus('success');
                clearForm(); // Clear the form on successful submission
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus('Error submitting form.');
        } finally {
            setLoading(false); // Re-enable the button after receiving the response
        }
    };

    const clearForm = () => {
        setName('');
        setEmail('');
        setPerformance('');
        setNameError(false);
        setEmailError(false);
        setPerformanceError(false);
    };

    return (
        <>
            {/* Header for the form */}
            <h2 className="form-header">Book your play here</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Full Name</label>
                    {nameError && <small className="error-message">This field is mandatory</small>}
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onBlur={handleNameBlur} // Add blur event for validation
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">E-Mail</label>
                    {emailError && <small className="error-message">This field is mandatory</small>}
                    <input
                        type="text"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onBlur={handleEmailBlur} // Add blur event for validation
                        required
                    />
                </div>
                <div>
                    <label htmlFor="dropdown">Performance</label>
                    {performanceError && <small className="error-message">This field is mandatory</small>}
                    <select
                        id="dropdown"
                        value={performance}
                        onChange={(e) => setPerformance(e.target.value)}
                        onBlur={handlePerformanceBlur} // Add blur event for validation
                        required
                    >
                        <option value="">Select an option</option>
                        {options.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>

                <button
                    type="submit"
                    disabled={!isFormValid || loading}
                    style={{
                        backgroundColor: (!isFormValid || loading) ? 'gray' : '#FF5733',
                        cursor: (!isFormValid || loading) ? 'not-allowed' : 'pointer',
                    }}
                >
                    {loading ? 'Submitting...' : 'Submit'}
                </button>

                {submitStatus === 'success' && (
                    <p className="success-message">
                        Ticket has been booked successfully and sent to your email
                    </p>
                )}
                {submitStatus !== 'success' && submitStatus && (
                    <p className="error-message">{submitStatus}</p>
                )}
            </form>
        </>
    );
};

export default Form;
