/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import styled from 'styled-components';
import { postPreSignedPutUrl, putUploadToAws } from '../services/api/api';
import LoadingButton from './LoadingButton';

export default function UploadFileContainer({ contribute }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [linkField, setLinkField] = useState('');
  const [uploadLink, setUploadLink] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const handleFileInput = (e) => setSelectedFile(e.target.files[0]);

  const uploadFile = (file) => {
    setIsLoading(true);
    const body = {
      fileName: file.name,
      fileType: file.type,
    };

    postPreSignedPutUrl(body).then((res) => {
      putUploadToAws(res.data, file)
        .then((response) => {
          setUploadLink(response.url);
        })
        .catch((err) => console.log(err));
    });
  };

  return (
    <>
      <UploadContainer>
        <label htmlFor="files">Selecione o Pdf</label>
        <input id="files" type="file" onChange={handleFileInput} />
        <p>{selectedFile?.name || 'Nenhum arquivo selecionado'}</p>
      </UploadContainer>
      <InputUrl
        type='url'
        placeholder='OU COLE A URL'
        value={linkField}
        onChange={(e) => setLinkField(e.target.value)}
      />
      <ConfirmButton
        disable={isLoading}
        onClick={() => {
          if (selectedFile) uploadFile(selectedFile);
          
        }}
      >
        {isLoading ? <LoadingButton /> : 'Enviar'}
      </ConfirmButton>
    </>
  );
}

const InputUrl = styled.input`
  margin: 10px 0;
  width: 100%;
  font-size: 23px;
  padding: 0 10px;
  outline: none;
  border: 1px #656565 solid;
  border-radius: 5px;
`;

const UploadContainer = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 20px;
  > input[type='file'] {
    display: none;
  }
  > label {
    background-color: #c4c4c4;
    border-radius: 5px;
    padding: 10px;
    margin-right: 10px;
    cursor: pointer;
  }
`;

const ConfirmButton = styled.button`
  background-color: #62af8a;
  width: 220px;
  outline: none;
  border: none;
  height: 30px;
  font-size: 22px;
  color: #303030;
  border-radius: 5px;
  cursor: pointer;
`;
