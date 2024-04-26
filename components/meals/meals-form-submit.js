import { useFormStatus } from 'react-dom';

export default function MealsFormSubmission () {
    const { pending } = useFormStatus();

    return <button disabled ={pending}>
        {pending ? 'Sending...' : 'Share Meal'}
    </button>

}