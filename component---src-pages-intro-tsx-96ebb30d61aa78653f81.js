"use strict";(self.webpackChunk_portfolio_blog=self.webpackChunk_portfolio_blog||[]).push([[680],{3392:function(t,e,i){i.d(e,{E:function(){return r}});var l=JSON.parse('{"author":"어쩌다 Nest","title":"Study Log","titleTemplate":"%s · 어쩌다 Nest","placeholder":"/nestjs.svg","siteUrl":"https://eojjeoda-nest.github.io","description":"Nest 스터디 - 오셔서 고양이 한 마리씩 분양받아가세용","github":"eojjeoda-nest"}'),s=JSON.parse('{"config":{"name":"오현택","role":"Software Engineer","bio":["분야 상관없이 다양한 도메인에 관심이 많은 <string>3년차 소프트웨어 엔지니어</string>","<string>누적 회원수 300만</string>의 에듀테크 아키텍쳐 설계 및 백엔드 서비스 개발","운영 환경 개선을 위한 모니터링 및 로그 시스템 개발"],"github":"https://github.com/HyunTaek5","blog":"https://eight20.tistory.com","email":"oht1312@gmail.com"},"careers":{"title":"경력","list":[{"name":"EntropyParadox","position":"Software Engineer","department":"백엔드 엔지니어","startDate":"2021.05","endDate":"2024.01","descriptions":["웹 MVP 프로젝트를 End-To-End로 아키텍쳐 설계/구축 및 서비스를 운영하였습니다.","1년 11개월간 병역 특례를 받아 병역의 의무를 수행하였습니다."],"projects":[{"name":"튼튼영어 LIVE","startDate":"2021.06","endDate":"2023.01","descriptions":["초등학생 대상으로 초등영어 콘텐츠를 1대1 화상으로 제공하는 누적 회원수 300만명의 에듀테크 서비스입니다. 느린 응답 속도 개선을 목표로 서버 안정화 작업을 진행하였고, 부하테스트와 모니터링 시스템을 구축하여 안정성을 향상시켰습니다."],"which":[{"title":"API 서버 애플리케이션 및 게이트웨이 구축","subTitle":["프론트에서 데이터를 조회하여 처리하던 로직을 백엔드에서 정렬,필터하여 조회후 반환하는 방식으로 전환하였고, 한번에 최대 30개의 데이터만 조회가능하도록 페이징 처리하여 대시보드 화면의 로딩 시간 약 2초 개선 및 쿼리 성능 향상 (2100ms ➞ 800ms)","랭킹 조회시 랭킹 산정하던 로직을 5분 단위 스케줄링 작업의 별도 로직으로 분리하였고, Redis 캐시의 TTL을 5분으로 설정하여 특정 API 엔드포인트 호출시 부하가 걸리던 현상 개선 (서버 CPU 로드율 약 15% 개선)"]},{"title":"모니터링, 알림 시스템의 구축을 통한 서버 부하 및 장애 발생 여부 확인 자동화","subTitle":["부하 시나리오 테스트를 통해 API의 성능 및 신뢰성 검증","장애 발생시 연결된 슬랙 채널을 통해 부하, 장애 알림 발송"]}]},{"name":"슈퍼스쿨","startDate":"2021.12","endDate":"2023.02","descriptions":["학교 생활과 관련된 출결, 교과활동, 행정관리 작업을 지원하고, NICE와 연계된 대시보드를 제공하는 누적 학생 수 3만명의 에듀 테크 서비스입니다. 기존 레거시 코드의 느린 응답 속도 개선을 목표로 서버 안정화 작업을 진행하였고, 부하테스트와 추가적인 리소스 모니터링 시스템을 구축하여 가용성과 안정성을 향상시켰습니다."],"which":[{"title":"API 서버 애플리케이션 구축 및 레거시 리팩토링","subTitle":["기존 레거시 코드 중 잦은 장애가 발생하던 부분을 REST API로 리팩토링","불필요한 쿼리의 반복 실행을 방지하기 위해 Redis Cache 도입 (1000ms ➞ 600ms)"]},{"title":"학생 출결 데이터 시각화 대시보드 REST API 구현 및 레거시 성능 개선","subTitle":["GraphQL에서 1:N 관계에서 발생되는 N+1 슬로우 쿼리에 Data Loader를 적용하여 1번의 조회 쿼리로 개선 (1700ms ➞ 900ms)","프론트에서 전체 데이터를 조회하여 처리하던 정렬/필터 로직을 백엔드에서 정렬,필터하여 조회후 반환하는 방식으로 전환하였고, 한번에 최대 30개의 데이터만을 조회가능하도록 페이징 처리하여 대시보드 화면의 로딩 시간 3초 개선 및 쿼리 성능 향상 (3700ms ➞ 700ms)"]},{"title":"모니터링 & 알림 시스템 구축을 통해 서버 부하 및 장애 확인의 자동화 ","subTitle":["부하 시나리오 테스트를 통해 API의 성능 및 신뢰성 검증"]}]},{"name":"바나나파츠","startDate":"2022.12","endDate":"2024.01","descriptions":["오프라인에서 발행되던 전기부품의 정보 및 뉴스, 부품 판매 및 견적을 제공하는 포털 서비스입니다. 판매자의 대량 부품 판매 등록 파이프라인의 목표 처리량 5000건을 안정적으로 처리하면서 서버의 고가용성을 유지하기 위해 부하테스트와 모니터링을 통해 안정성을 향상시켰습니다."],"which":[{"title":"API 서버 애플리케이션 및 대량 부품 등록 파이프라인 구축","subTitle":["파이프라인 구조 : Server ➞ MQ ➞ Parsing ➞ MQ ➞ Validation  ➞ MQ ➞ User Notice","Non-blocking, 순차 처리 신뢰성을 위해 Redis 기반 Bull Message Queue 도입","알림 발송 서비스와 비즈니스 로직간의 결합성을 낮추기 위해 메시지 기반 유저 알림 비동기 발송 구현"]},{"title":"실시간 인기 위키 랭킹 처리를 위한 Worker, REST API 구현 및 성능 개선","subTitle":["일별/시간대별 위키 조회수의 산정 범위를 30분 단위에서 10분 단위로 변경하여 랭킹 산정시 부하를 분산시키고, 인기순 위키 조회시 Redis 캐시의 TTL을 10분으로 설정하여 조회 성능 향상 (2500ms ➞ 500ms)","쿼리문에 Prepare Statement를 사용하여 쿼리 인젝션 공격 방어 및 옵티마이저 최적화"]},{"title":"Jest, Mockito를 활용한 핵심 비즈니스 로직의 TDD 도입","subTitle":["유닛 테스트 및 E2E 테스트를 통해 핵심 비즈니스 로직의 신뢰성 검증"]},{"title":"모니터링 및 장애 알림 시스템 구축을 통한 API 서버 부하 및 장애 슬랙 알림 자동화","subTitle":["부하 시나리오 테스트를 통해 파이프라인과 API의 성능 및 신뢰성 검증"]}]},{"name":"데브옵스","startDate":"2022.01","endDate":"2024.01","descriptions":["사내 프로젝트 배포, 알림, 모니터링 관련 시스템 구축 및 운영"],"which":[{"title":"AWS Elastic Beanstalk, Code deploy를 사용한 Blue-Green 무중단 배포","subTitle":[]},{"title":"Github Action, Docker를 사용한 Rolling 무중단 배포","subTitle":["수동으로 배포하던 프로세스를 Github Action을 통해 자동화하여 배포 시간을 단축","AS-IS : 30분","TO-BE : 8분"]},{"title":"Winston 기반 로그 시스템 신규 구축","subTitle":[]},{"title":"Grafana, Prometheus 기반 APM, 인프라 모니터링 시스템을 구축하여 서비스의 운영 단계 모니터링 관제 추가","subTitle":["Prometheus를 통해 서비스의 CPU, Memory, Network, Disk 등의 리소스 모니터링","Grafana를 통해 Prometheus의 데이터를 시각화하여 모니터링 대시보드 구축","Alert Manager를 통해 서비스의 장애 발생시 슬랙 장애 알림 자동화"]},{"title":"S3, Cloud Front를 이용한 정적 리소스 비용 절감 및 CDN 적용","subTitle":[]}]}]}]},"skills":{"title":"기술","list":[{"title":"Language","descriptions":[{"title":"TypeScript","subTitle":[]},{"title":"JavaScript","subTitle":[]},{"title":"Java","subTitle":[]},{"title":"Kotlin","subTitle":[]},{"title":"Python","subTitle":[]}]},{"title":"Server","descriptions":[{"title":"NestJs","subTitle":[]},{"title":"ExpressJs","subTitle":[]},{"title":"Spring Boot","subTitle":[]},{"title":"Django","subTitle":[]},{"title":"Flask","subTitle":[]}]},{"title":"Database","descriptions":[{"title":"MySQL","subTitle":[]},{"title":"PostgreSQL","subTitle":[]},{"title":"MSSQL","subTitle":[]}]},{"title":"ORM","descriptions":[{"title":"TypeORM","subTitle":[]},{"title":"Prisma","subTitle":[]},{"title":"Spring Data JPA","subTitle":[]}]},{"title":"DevOps","descriptions":[{"title":"AWS","subTitle":["EC2, S3, RDS, SQS, CloudFront","Elastic Beanstalk, Code Deploy","ECR, Amplify"]},{"title":"Web Server","subTitle":["Nginx, PM2"]},{"title":"Cache","subTitle":["Redis"]},{"title":"Message Queue","subTitle":["RabbitMQ, BullMQ"]},{"title":"Monitoring","subTitle":["Grafana, Prometheus, Alert Manager"]},{"title":"Log","subTitle":["Winston, Promtail, Loki"]},{"title":"CI/CD","subTitle":["Jenkins","Github Action"]}]},{"title":"Client","descriptions":[{"title":"NextJs","subTitle":[]},{"title":"React","subTitle":[]},{"title":"Tailwind CSS","subTitle":[]}]}]},"hobby":{"description":"취미","list":[{"title":"블로깅","url":"https://eight20.tistory.com","descriptions":["개발하다 발생했던 이슈와 원인, 해결 방법을 글로 작성하여 블로그에 공유합니다.","3년째 꾸준히 작성하고 있으며, 누적 방문자수 13000명을 기록하고 있습니다.","https://eight20.tistory.com에서 기존 글을 확인하실 수 있습니다."]},{"title":"카페 탐방","url":null,"descriptions":["평균 평점 4.0 이상인 카페 100개 이상 맛집 리스트","분위기 좋은 카페/맛있는 커피를 찾아 여행다니면서 기록하고 있어요."]},{"title":"사이드 프로젝트","url":null,"descriptions":["적용해보고 싶은 기술을 가지고, 서비스를 만듭니다.","주변 사람들이 있으면 좋겠다라는 이야기를 하는 주제로, 누군가에게 도움이 되는 프로젝트를 진행하고 있어요."]},{"title":"개발자 행사 준비 및 기획","url":null,"descriptions":["개발 관련 오프라인 밋업, 컨퍼런스를 기획하고, 준비하는 걸 좋아해요.","기회가 될 때마다 100명 규모의 기술 컨퍼런스, 해커톤, 네트워킹 행사를 기획하고 있어요!"]}]},"activities":{"description":"활동","list":[{"title":"2021.01 ~ 2021.02 AI 실리콘밸리 헤드스타트 인턴십 부트캠프 1기 수료","url":"http://techeer.net"},{"title":"2021.03 ~ Techeer 1기","url":"https://github.com/techeer-sv"},{"title":"2022.02 ~ 2022.08 [테커 파트너스] Backend 파트 멘토","url":null},{"title":"2022.05.26 ~ 2022.05.27 [한국공학대학교 x 테커] 2023 실리콘밸리 아이디어 해커톤 멘토","url":null},{"title":"2023.04 ~ 2023.07 자바 ORM 표준 JPA 프로그래밍 스터디 팀장","url":null},{"title":"2023.07.28 [D.camp x 티타임즈 x 테커] 2023 테커 하계 부트캠프 쿼리 튜닝 세션","url":null},{"title":"2023.11 ~ 어쩌다 Nest 팀장","url":"https://github.com/eojjeoda-nest"}]}}');function r(){return{profile:l,resume:s}}}}]);
//# sourceMappingURL=component---src-pages-intro-tsx-96ebb30d61aa78653f81.js.map