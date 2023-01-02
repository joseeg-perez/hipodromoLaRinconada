import React, { Fragment } from "react";
import {
  Container,
  Card,
  Form,
  FormLabel,
  Row,
  Col,
  Button,
  FormCheck,
  FormGroup,
  FormSelect,
  FormControl,
} from "react-bootstrap";

import amazon from "../../assets/amazon.svg";
import apple from "../../assets/apple.svg";
import instagram from "../../assets/instagram.svg";
import google from "../../assets/google.svg";
import spotify from "../../assets/spotify.svg";
import twitch from "../../assets/twitch.svg";
import bar from '../../assets/bar.svg'
const SimbolosPartnes = () => {
  return (
    <Fragment>
      <div>
        <img
          src={twitch}
          className='mx-3'
        />
        <img
          className='mx-3'
          src={amazon}
          
        />
        <img
          src={instagram}
          className='mx-3'
        />
        <img
          src={google}
          className='mx-3'
        />
        <img
          src={spotify}
          className='mx-3'
        />
        <img
          src={apple}
          className='mx-3'
        />

      </div>

      <div>
        <img src={bar} width={500}></img>
      </div>
    </Fragment>
  );
};

export default SimbolosPartnes;
