import React, { Component } from 'react';

type State = {
  theme: 'light' | 'dark';
  language: 'english' | 'vietnamese';
};

export default class AppLangue extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      theme: 'dark',       
      language: 'vietnamese'  
    };
  }

  render() {
    const { theme, language } = this.state;

    const style = {
      backgroundColor: theme === 'dark' ? 'black' : 'white',
      color: theme === 'dark' ? 'white' : 'black',
      padding: '30px',
      margin: '20px',
      fontSize: '20px',
      fontWeight: 'bold',
      border: '1px solid #ccc',
    };

    const themeText = theme === 'dark' ? 'Tối' : 'Sáng';
    const langText = language === 'vietnamese' ? 'Tiếng Việt' : 'English';

    return (
      <div style={style}>
        <p>Nền: {themeText}</p>
        <p>Ngôn ngữ: {langText}</p>
      </div>
    );
  }
}
