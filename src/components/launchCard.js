import moment from "moment";

const countDown = (launchDateTime) => {
  const eventTime = moment(new Date()).unix();
  const currentTime = moment(launchDateTime).unix();
  const diffTime = eventTime - currentTime;
  let duration = moment.duration(diffTime * 1000, 'milliseconds');
  const interval = 1000;
  // let countDownString = "";
  // setInterval(() => {
    return moment.duration(duration - interval, 'milliseconds');
    // return Math.abs(lengthOfTime.days()) + ":" + Math.abs(lengthOfTime.hours()) + ":" + Math.abs(lengthOfTime.minutes()) + ":" + Math.abs(lengthOfTime.seconds());
  // });
};

const launchCard = ({launch}) => {
    return(
      <div className="col d-flex align-items-stretch">
        <div className="card mb-4 rounded-3 shadow-sm">
          <div className="card-header py-3">
            <div className="">
              <img src={ launch.image } className="card-img-top img-fit"/>
            </div>
          </div>
          <div className="card-body">
            <h1 className="header-class font-weight-bold">{ launch.name }<small className="text-muted fw-light"></small></h1>
            <div className="row">
              <div className="col">
                { Math.abs(countDown(launch.net).days()) }
              </div>
              <div className="col">
                { Math.abs(countDown(launch.net).hours()) }
              </div>
              <div className="col">
                { Math.abs(countDown(launch.net).minutes()) }
              </div>
              <div className="col">
                { Math.abs(countDown(launch.net).seconds()) }
              </div>
            </div>
            <div className="row">
              <div className="col">
                Days
              </div>
              <div className="col">
                Hours
              </div>
              <div className="col">
                Minutes
              </div>
              <div className="col">
                Seconds
              </div>
            </div>
            <ul className="list-unstyled mt-3 mb-4">
              <li>{ launch?.pad?.name }</li>
              <li className="text-truncate">{ launch?.mission?.description }</li>  
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    )
}

export default launchCard;