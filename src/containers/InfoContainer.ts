import {connect} from "react-redux";
import Info from "../components/ui/Info";

const mapStateToProps = (state: any) => ({
    mode: state.todos.mode
});

const InfoContainer = connect(mapStateToProps)(Info);

export default InfoContainer;
