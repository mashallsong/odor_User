## 냄새측정기 User 관리 시스템
본 프로잭트는  냄새측정기 유저 관리용으로 만들어진 관리 시스템.
 -  2023.01.27 퍼블리싱 완료
 -  BI 수정 및 Setting 작업 완료
 -  2023.01.28 HomePrintList 추가 작업 완료
 -  Home > 사용자 정보 > 지도 클릭 시 모달창 버튼 > 모달 제작
 -  HomePrintList.js 기간별 검색 추가

1. 인스톨 :
            npm install react-datepicker --save
2. 임포트 :
            import DatePicker from "react-datepicker";
            import "react-datepicker/dist/react-datepicker.css";
3. html : 

            <div className="CalendarSeach">
                <span>기간 검색</span>
                <div>
                    <DatePicker
                        selected={startDate}
                        onChange={(date:Date) => setStartDate(date)}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        className={'DPstartDate'}
                    />
                </div>
                <span>~</span>
                <div>
                    <DatePicker
                        selected={endDate}
                        onChange={(date:Date) => setEndDate(date)}
                        selectsEnd
                        startDate={endDate}
                        endDate={endDate}
                        minDate={startDate}
                        className={'DPstartDate'}
                    />
                </div>
            </div>

4. css
            .CalendarSeach {
                display: flex;
                align-items: center;
            }

            .CalendarSeach > span {
                padding: 0 8px;
            }

            .CalendarSeach > DatePicker {
                height: 200px;
            }

            .DPstartDate {
                width: 140px;
                border-radius: 8px;
                border: 1px solid #dadada;
                padding: 12px 16px;
                font-size: 16px;
                text-align: center;
            }

    

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
