import React from 'react';
import styled from 'styled-components';

const MeetingEditor = () => {
  return (
    <EditorWrapper>
      <div className="title-container">
        <input
          className="title-input"
          type="text"
          placeholder="제목을 입력하세요"
        />
      </div>
      <div className="contents-container">
        <textarea className="contents-input"></textarea>
      </div>
    </EditorWrapper>
  );
};

const EditorWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  flex: 1;

  .title-input {
    width: 100%;
    padding-bottom: 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.color.lightGray};
    font-size: ${({ theme }) => theme.fontSize.lgTitle};
    &::placeholder {
      font-size: ${({ theme }) => theme.fontSize.lgTitle};
    }
  }

  .contents-container {
    min-height: 30rem;
    flex: 1;
  }
  .contents-input {
    width: 100%;
    height: 100%;
    padding: 1rem;
    border: 1px solid ${({ theme }) => theme.color.lightGray};
    border-radius: 0.3rem;
    font-size: ${({ theme }) => theme.fontSize.sm};
  }
`;

export default MeetingEditor;
