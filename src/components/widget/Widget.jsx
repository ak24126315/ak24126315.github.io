import "./widget.scss"
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
const Widget = () => {
    return (
        <div className="widget">
            <div className="left">
                <span className="title">USERS</span>
                <span className="counter">222</span>
                <span className="link">see all users</span>
            </div>
            <div className="right">
                <div className="percent positive">
                    <KeyboardArrowUpOutlinedIcon/>
                    20%
                </div>
                <PersonOutlineOutlinedIcon className="icon"/>
            </div>
        </div>
    )
}
export default Widget