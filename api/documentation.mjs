import express from 'express';
import path from 'path';
import { renderDocumentationPage } from '../views/login.mjs';

const getAllDocumentationController = async (req, res) => {
  const pageContent = renderDocumentationPage();
      res.send(pageContent);
  };

export {
  getAllDocumentationController,
};
