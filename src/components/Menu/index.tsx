import { HomeIcon, MoonIcon, RotateCcwIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './Styles.module.css';
import { useEffect, useState } from 'react';

type AvailibleThemes = 'dark' | 'light'
export function Menu() {

  const [theme, settheme] = useState<AvailibleThemes>(() =>{
    const storageTheme = localStorage.getItem('theme') as AvailibleThemes || 'dark'
    return storageTheme
  });

  const iconTheme = {
    dark : <SunIcon/>,
    light : <MoonIcon/>
  }

  //No evento de click do botão, atualiza a const theme para 'light' | 'dark'
  function handleDefaultTheme(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault();
    settheme(prevValue => {
      const nextTheme = prevValue === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });
  }

  //Monitora a mudança da const 'theme' e muda o atributo data-theme para light ou dark
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme)
  }, [theme]);

  return (
    <div className={styles.menu}>
      <a href='' className={styles.menuLink} title='Home'>
        <HomeIcon />
      </a>
      <a href='' className={styles.menuLink} title='Historico'>
        <RotateCcwIcon />
      </a>
      <a href='' className={styles.menuLink} title='Configurações'>
        <SettingsIcon />
      </a>
      <a
        href=''
        className={styles.menuLink}
        title='Tema'
        onClick={handleDefaultTheme}
      >
        {iconTheme[theme]}
      </a>
    </div>
  );
}
