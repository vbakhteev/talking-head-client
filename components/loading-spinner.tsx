import { ThreeDots } from 'react-loader-spinner'

export const LoadingSpinner = () => {
    return (
        <ThreeDots
            height="80"
            width="80"
            color="#1E90FF"
            ariaLabel="three-dots-loading"
        />
    );
};