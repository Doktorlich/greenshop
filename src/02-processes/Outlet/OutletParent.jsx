import React from "react";
import Card from "../../07-shared/UI/Card/Card";
import Header from "../../04-widgets/Header/Header";
import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";
const OutletParent = () => {
    return (
        <React.Fragment>
            <Card>
                <Header />
                <Outlet></Outlet>
            </Card>
        </React.Fragment>
    );
};

export default OutletParent;

OutletParent.propTypes = {
    children: PropTypes.node,
};
