import estilos from './button.module.css';

const Button = ({ value, variant }) => {
    //console.log('prop :', prop);
    return <button className={estilos[variant]}>{value}</button>;
};

export default Button;
