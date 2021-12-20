/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useAlert } from 'react-alert';
import styled from 'styled-components';
import {
  postPreSignedPutUrl,
  postTest,
  putUploadToAws,
} from '../services/api/api';
import AlertContainer from './AlertContainer';
import LoadingButton from './LoadingButton';
import ModalAnimatePresence from './ModalAnimatePresence';

export default function UploadFileContainer({
  contribute,
  modalOpen,
  setModalOpen,
}) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [linkField, setLinkField] = useState('');
  const [isLoading, setIsLoading] = useState(null);

  const alert = useAlert();

  const handleFileInput = (e) => setSelectedFile(e.target.files[0]);

  const handleSubmit = (link) => {
    setIsLoading(true);
    postTest({ ...contribute, link })
      .then(() => {
        setModalOpen(true);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.response);
        if (err.response.status === 400)
          alert.error(<AlertContainer>A url digitada é inválida</AlertContainer>);
        setIsLoading(false);
      });
  };

  const uploadFile = (file) => {
    setIsLoading(true);
    const body = {
      fileName: file.name,
      fileType: file.type,
    };
    postPreSignedPutUrl(body).then((res) => {
      putUploadToAws(res.data, file).then(() => {});
    });
  };

  return (
    <>
      <ModalAnimatePresence
        title="Obrigado pela contribuição!"
        description="Sem você não seríamos nada 😌"
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
      <UploadContainer>
        <label htmlFor="files">Selecione o Pdf</label>
        <input id="files" type="file" onChange={handleFileInput} />
        <p>{selectedFile?.name || 'Nenhum arquivo selecionado'}</p>
      </UploadContainer>
      <InputUrl
        type="url"
        placeholder="OU COLE A URL"
        value={linkField}
        onChange={(e) => setLinkField(e.target.value)}
      />
      <ConfirmButton
        disable={isLoading}
        onClick={() => {
          if (selectedFile) uploadFile(selectedFile);
          else handleSubmit(linkField);
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
