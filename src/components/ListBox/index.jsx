import React from "react";
import { ListWrap, List, Title, Content, Keyword, TrashIcon } from "./styled";

const ListBox = ({ list, handleClickDeleteButton }) => {
    return (
        <ListWrap>
            {list &&
                list.map((item) => {
                    return (
                        <List key={item._id}>
                            <Title>{item.name}</Title>
                            <Content>
                                {item.keywords.map((keyword) => {
                                    return <Keyword key={item._id}>{keyword}</Keyword>;
                                })}
                            </Content>
                            <TrashIcon onClick={() => handleClickDeleteButton(item._id)} />
                        </List>
                    );
                })}
        </ListWrap>
    );
};

export default ListBox;
