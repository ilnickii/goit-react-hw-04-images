import CSS from './Button.module.css';

export const Button = ({ onClick }) => {
    return (
        <button type="button" onClick={onClick} className={CSS.Button}>Load more</button>
    );
};