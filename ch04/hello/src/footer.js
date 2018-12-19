import React, { Component } from 'react';
import styled from 'styled-components';

class footer extends Component {
    render() {
        const FooterBox = styled.div`
            position:absolute;
            right:0; bottom:0; left:0;
            padding: 1rem;
            background-color: ${
                (props) => {
                    let color = "skyblue";
                    if (props.theme !== "basic") {
                        color = "#cdcdcd";
                    }

                    return color;
                }
            };
            text-align: center;
        `; // template reiterer

        return (
            <FooterBox>React Styled Component!</FooterBox>
        );
    }
}

export default footer;