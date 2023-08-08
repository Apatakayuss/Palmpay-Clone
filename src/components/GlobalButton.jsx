// import styled from 'styled-components'


// const GlobalButton = ({children, ...props}) => {
//   return (
//    <Button {...props}>
//         {children}
//    </Button>
//   )
// }

// export default GlobalButton

// const Button = styled.button`
//     background-color: ${(props) = props.color || 'purple'};
//     color: ${(props) = props.color || 'yellow'};
//     width: ${(props) = props.width || 'fit-content'};
//     border: ${(props) = props.broder|| 'none'};
//     border-radius: ${(props) = props.border-radius || '10px'};
//     cursor: pointer;
//     &:hover{
//         background-color: ${(props) = props.background-color || 'blue'};
//     }
// `



const Button = ({ children, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-[#6307b2] pointer hover:bg-[#7320ba] text-white py-3 px-6 rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-300 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
