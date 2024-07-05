import Switch from "@mui/material/Switch";
import { alpha, styled } from "@mui/material/styles";

const PurpleSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: '#9d5ee4',
      '&:hover': {
        backgroundColor: alpha('#6a0dad', theme.palette.action.hoverOpacity),
      },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: '#6a0dad',
    },
  }));

function SwitchColor({ checked, onChange }) {
    return(
        <div>
            <PurpleSwitch checked={checked} onChange={onChange}/>
        </div>
    )
}

export default SwitchColor;