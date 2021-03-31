import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class MyIcons {

  public static HOME_ICON = `<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M14.7891 7.89062L8.35311 1.45937C8.30677 1.41294 8.25173 1.3761 8.19114 1.35097C8.13054 1.32583 8.06559 1.3129 7.99999 1.3129C7.93439 1.3129 7.86943 1.32583 7.80884 1.35097C7.74825 1.3761 7.6932 1.41294 7.64686 1.45937L1.21093 7.89062C1.02343 8.07812 0.917175 8.33281 0.917175 8.59843C0.917175 9.14999 1.36561 9.59843 1.91718 9.59843H2.5953V14.1875C2.5953 14.4641 2.81874 14.6875 3.0953 14.6875H6.99999V11.1875H8.74999V14.6875H12.9047C13.1812 14.6875 13.4047 14.4641 13.4047 14.1875V9.59843H14.0828C14.3484 9.59843 14.6031 9.49374 14.7906 9.30468C15.1797 8.91406 15.1797 8.28124 14.7891 7.89062Z" fill="currentColor"/>
  </svg>
  `;

  public static REGISTER_ICON = `<svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9.52941 0.5H18V6.85294H9.52941V0.5ZM9.52941 18.5V7.91177H18V18.5H9.52941ZM0 18.5V12.1471H8.47059V18.5H0ZM0 11.0882V0.5H8.47059V11.0882H0ZM1.05882 1.55882V10.0294H7.41177V1.55882H1.05882ZM10.5882 1.55882V5.79412H16.9412V1.55882H10.5882ZM10.5882 8.97059V17.4412H16.9412V8.97059H10.5882ZM1.05882 13.2059V17.4412H7.41177V13.2059H1.05882Z" fill="currentColor"/>
  </svg>`;

  public static NEW_REGISTER_ICON = `<svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M16.9231 4.99965H3.07692C1.92987 4.99965 1 5.92952 1 7.07657V15.3843C1 16.5313 1.92987 17.4612 3.07692 17.4612H16.9231C18.0701 17.4612 19 16.5313 19 15.3843V7.07657C19 5.92952 18.0701 4.99965 16.9231 4.99965Z" stroke="currentColor" stroke-width="1.53846" stroke-linejoin="round"/>
  <path d="M16.7223 4.99965V3.70157C16.7222 3.3832 16.6518 3.06877 16.5162 2.78073C16.3806 2.49268 16.1831 2.23812 15.9378 2.03519C15.6925 1.83227 15.4054 1.686 15.097 1.6068C14.7886 1.52761 14.4666 1.51745 14.1538 1.57705L2.75846 3.522C2.2636 3.61631 1.81716 3.88035 1.49615 4.26859C1.17513 4.65682 0.999659 5.14492 1 5.64868V7.76888" stroke="currentColor" stroke-width="1.53846" stroke-linejoin="round"/>
  <path d="M14.8462 12.615C14.5723 12.615 14.3046 12.5338 14.0769 12.3817C13.8492 12.2295 13.6717 12.0133 13.5669 11.7603C13.4621 11.5073 13.4347 11.2289 13.4882 10.9603C13.5416 10.6917 13.6735 10.445 13.8671 10.2514C14.0607 10.0577 14.3074 9.92584 14.576 9.87242C14.8446 9.81899 15.123 9.84641 15.376 9.95121C15.629 10.056 15.8453 10.2335 15.9974 10.4612C16.1496 10.6889 16.2308 10.9566 16.2308 11.2304C16.2308 11.5976 16.0849 11.9498 15.8252 12.2095C15.5656 12.4692 15.2134 12.615 14.8462 12.615Z" fill="currentColor"/>
  </svg>`;

  public static USER_MANAGAMENT_ICON = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M16 3.13C16.8604 3.3503 17.623 3.8507 18.1676 4.55231C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  `;
}