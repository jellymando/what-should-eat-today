import React from "react";
import { ListWrap, List, Image, Title, Content, KeywordWrap, Keyword, TrashIcon } from "./styled";

const ListBox = ({ list, handleClickDeleteButton, hasImage }) => {
    return (
        <ListWrap>
            {list &&
                list.map((item) => {
                    return (
                        <List key={item._id}>
                            {hasImage && <Image imageUrl={item.profileImage} />}
                            <Content>
                                <Title>{item.name}</Title>
                                {item.keywords && (
                                    <KeywordWrap>
                                        {item.keywords.map((keyword) => {
                                            return <Keyword key={item._id}>{keyword}</Keyword>;
                                        })}
                                    </KeywordWrap>
                                )}
                            </Content>
                            <TrashIcon onClick={() => handleClickDeleteButton(item._id)} />
                        </List>
                    );
                })}
        </ListWrap>
    );
};

export default ListBox;
