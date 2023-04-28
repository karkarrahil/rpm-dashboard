const accordion = document.getElementById('accordionExample')
const headerCods = document.getElementById('headerCode')
const modalTrigger = document.querySelector('.modal-body')


const api = async () => {
    let data = await fetch('data.JSON');

    let Json = await data.json();
    JSON.parse(JSON.stringify(Json));

    Json.map(
        (element) => {

            let codeHead = document.createElement('p');
            codeHead.innerText = element.Code;
            const div = document.createElement("div");
            div.className += "accordion-item  my-1 mx-0 p-0";
            // const accBody = document.createElement("div");
            // accBody.className+="accordion-body p-0 my-0"

            const Html = `
    <div class="accordion-header text-light">
        <div class="acc-content d-flex justify-content-between  align-items-center align-items-center mx-0 ">

            <p class="lineUp modal-trigger" id="modText">${(element.Code)}</p>
            <i class="spinner-grow spinner-grow-sm  text-light" role="status" id="spinner"></i>
        </div>
        </div>
        <div class="accordion-body p-0 my-0" id="accBody">
        <table class="table  m-0">
            <thead>
                <tr>
                    <th>
                        K.Pick:
                    </th>
                    <th>
                        EFF:
                    </th>
                    <th>
                        RPM:
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>${(element.KPlicks)}</td>
                    <td>${(element.EFF)}</td>
                    <td class="RPM">${element.RPM}</td>
                </tr>
            </tbody>
        </table>
        <table class="table  m-0">
            <thead>
                <tr>
                    <th>
                        TIME:
                    </th>
                    <th>
                        SE:
                    </th>
                    <th>
                        P.MTR:
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>${element.TIME}</td>
                    <td>${element.SE}</td>
                    <td>${element.PMTR}</td>
                </tr>
            </tbody>
            
        </table>
        
        <div class="text-center style">
           
            <h6 class="text-light p-0">Design</h6>

        </div>
    </div>`



            div.innerHTML = Html;
            accordion.appendChild(div);

        });

    let spinner = document.querySelectorAll('.spinner-grow');
    let accordionHead = document.querySelectorAll('.accordion-header');
    let Modal = document.getElementsByClassName('modal-trigger');




    let RPM = document.querySelectorAll('.RPM');
    RPM.forEach((ele, i) => {


        let eleHtml = parseInt(ele.innerHTML);
        if (ele.innerHTML > 1) {
            {
                spinner.forEach(
                    (spin, index) => {
                        index = i;
                        // console.log(spinner)
                        spinner[i].classList.remove('text-light');
                        spinner[i].classList.remove('spinner-grow');
                        spinner[i].classList.add('text-warning');
                    }
                )
                accordionHead.forEach(
                    (Ach, ind) => {
                        ind = i;
                        accordionHead[i].classList.remove('bg-success');
                        accordionHead[i].classList.add('bg-danger');

                    }
                )
            }
        }
    })

}

api();
