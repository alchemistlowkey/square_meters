<script>
  import Bg from "../shared/Bg.svelte";
  import PageHead from "../shared/PageHead.svelte";
  import Button from "../shared/Button.svelte";
  import Modal from "../shared/Modal.svelte";
  import Form from "../shared/Form.svelte";

  let showModal = false;
  let formHeader = "";
  let formText = "";
  let fullName = "";
  let email = "";
  let phoneNumber = "";
  let message = "";

  function handleOpenForm(event) {
    const {
      formHeader: header,
      formText: text,
      fullName: name,
      email: mail,
      phoneNumber: phone,
      message: msg,
    } = event.detail;
    formHeader = header;
    formText = text;
    fullName = name;
    email = mail;
    phoneNumber = phone;
    message = msg;
    showModal = true;
  }

  function closeModal() {
    showModal = false;
  }
</script>

<Bg headerBG="privacy.jpeg">
  <PageHead
    CardContent="Privacy & Data Protection Policy"
    CardContent3="This following document outlines our practices regarding the
          collection, use, and disclosure of certain information, including your
          personal information in connection with our brand (SQUARE METRES)."
  >
    <Button
      btnDetails="Contact Us"
      formHeader="Contact Us"
      formText="For Land and Investments"
      fullName="Full Name"
      email="Email"
      phoneNumber="Phone Number"
      message="Message"
      on:openform={handleOpenForm}
    ></Button>
  </PageHead>
</Bg>

<Modal isOpen={showModal} close={closeModal}>
  <Form {formHeader} {formText} {fullName} {email} {phoneNumber} {message} />
</Modal>

<section class="py-10 mb-16 md:text-lg lg:text-xl text-base">
  <div class="container">
    <div class="row mx-0 py-10 text-cgreen">
      <div class="col-lg-10 offset-lg-1">
        <div class="collection"><h1>Collection of Information</h1></div>
        <p class="">We receive and store information about you such as:</p>
        <div class="">
          <ul class="responsive-list">
            <li class="py-2">
              <span class="text-start fw-bold text-lg md:text-xl lg:text-2xl"
                >Information you provide to us:</span
              >
              We collect information you provide to us, which includes:
              <ul class="responsive-list">
                <li>
                  your name, email address, telephone number, and other
                  identifiers you might use. We collect this information in a
                  number of ways, including when you enter it while using our
                  website, interact with our customer service, or participate in
                  surveys or marketing promotions;
                </li>
              </ul>
            </li>
            <li class="py-2">
              <span class="text-start fw-bold text-lg md:text-xl lg:text-2xl"
                >Information we collect automatically:</span
              >
              We collect information about you and your use of our service, your
              interactions with us and our advertising, as well as information regarding
              your network, network devices, and your computer you might use to access
              our website. This information includes:
              <ul class="responsive-list">
                <li>
                  your interactions with our emails and texts, and with our
                  messages through push and online messaging channels;
                </li>
                <li>
                  details of your interactions with our customer service, such
                  as the date, time, and reason for contacting us, transcripts
                  of any chat conversations, and if you call us, your phone
                  number and call recordings;
                </li>
                <li>
                  re-settable device identifiers (also known as advertising
                  identifiers), such as those on mobile devices, tablets, and
                  streaming media devices that include such identifiers;
                </li>
                <li>
                  information collected via the use of cookies, web beacons, and
                  other technologies, including ad information (such as
                  information on the availability and delivery of ads, the site
                  URL, as well as the date and time).
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="py-4 mx-0">
          <h3 class="text-start fw-bold text-lg md:text-xl lg:text-2xl">
            What we do with your information
          </h3>
          <p class="">
            We use information to provide, analyze, administer, enhance, and
            personalize our services and marketing efforts, to process your
            registration, your orders, and your payments, and to communicate
            with you on these and other topics. For example, we use such
            information to:
          </p>
          <div class="py-3 mx-0">
            <p>We may use your personal information to:</p>

            <ul class="responsive-list">
              <li>
                help us quickly and efficiently respond to inquiries and
                requests;
              </li>
              <li>
                provide information on our products and services – we use
                information to provide you with information on products and
                services you have requested, and to communicate with you about
                them;
              </li>
              <li>
                communicate promotions and competitions – we use contact details
                you have given us, to provide you with information about our
                promotions, offers, and events that we think will be of interest
                to you;
              </li>
              <li>
                respond and process enquiries, suggestions, and complaints; if
                you make an enquiry, suggestion, or complaint, we will use that
                information to provide you with an appropriate solution and to
                improve our products, services, and communications.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="row mx-0 py-3 text-cgreen">
      <div class="col-lg-10 offset-lg-1">
        <div class="collection"><h3>
          When do we send you marketing communications</h3>
        </div>
        <p class="py-2 py-md-3">
          We will only send you marketing communications where there is a
          necessity for us to do so. You have the right to withdraw your consent
          for us to use your personal information at any time for marketing
          communications. To unsubscribe from marketing communications, click on
          the ‘unsubscribe’ link in any marketing email received from us.
        </p>
      </div>
    </div>

    <div class="row mx-0 py-3 text-cgreen">
      <div class="col-lg-10 offset-lg-1">
        <div class="collection">
          What is our legal basis for using your personal information
        </div>
        <p class="py-2 py-md-3">
          We only use your personal information where it is permitted by laws
          that protect your privacy rights. These include but not are not
          limited to:
        </p>
        <ul class="responsive-list">
          <li>we have your consent (if applicable);</li>
          <li>
            we need to use the information to perform a contract with you;
          </li>
          <li>
            it is fair to use the personal information in our interests and at
            no disadvantage whatsoever to your personal interests– this can
            include but not limited to marketing additional products or services
            to you.
          </li>
        </ul>
      </div>
    </div>
    <div class="row mx-0 py-3 text-cgreen">
      <div class="col-lg-10 offset-lg-1">
        <div class="collection"><h3>Retention of Your Personal Data</h3></div>
        <p class="py-2 py-md-3">
          The Company will retain Your Personal Data only for as long as is
          necessary for the purposes set out in this Privacy Policy. We will
          retain and use Your Personal Data to the extent necessary to comply
          with our legal obligations (for example, if we are required to retain
          your data to comply with applicable laws), resolve disputes, and
          enforce our legal agreements and policies. The Company will also
          retain Usage Data for internal analysis purposes. Usage Data is
          generally retained for a shorter period of time, except when this data
          is used to strengthen the security or to improve the functionality of
          Our Service, or We are legally obligated to retain this data for
          longer time periods.
        </p>
      </div>
    </div>
    <div class="row mx-0 py-3 text-cgreen">
      <div class="col-lg-10 offset-lg-1">
        <div class="collection">Other legal requirements</div>
        <p class="py-2 py-md-3">
          The Company may disclose Your Personal Data in the good faith belief
          that such action is necessary to:
        </p>
        <ul class="responsive-list">
          <li>Comply with a legal obligation</li>
          <li>Protect and defend the rights or property of the Company</li>
          <li>
            Prevent or investigate possible wrongdoing in connection with the
            Service
          </li>
          <li>
            Protect the personal safety of Users of the Service or the public
          </li>
          <li>Protect against legal liability</li>
        </ul>
      </div>
    </div>
    <div class="row mx-0 py-3 text-cgreen">
      <div class="col-lg-10 offset-lg-1">
        <div class="collection"><h2>Information Security</h2></div>
        <p class="py-2 py-md-3">
          The security of Your Personal Data is important to Us, but remember
          that no method of transmission over the Internet, or method of
          electronic storage is 100% secure. While We strive to use commercially
          acceptable means to protect Your Personal Data, We cannot guarantee
          its absolute security.
        </p>
      </div>
    </div>
  </div>
</section>

<style>
  .collection {
    font-size: 28px;
    font-weight: 700;
    line-height: 40px;
    text-align: left;
    color: #f96b29;
  }
  .responsive-list {
    list-style-type: disc;
    margin-left: 1.5rem;
  }
  .responsive-list ul {
    list-style-type: circle;
    margin-left: 1.5rem;
  }

  @media (max-width: 768px) {
    .responsive-list {
      margin-left: 1rem;
    }
    .responsive-list ul {
      margin-left: 1rem;
    }
    .collection {
      font-size: 22px;
      line-height: 26px;
    }
  }

  @media (max-width: 576px) {
    .responsive-list {
      margin-left: 0.5rem;
    }
    .responsive-list ul {
      margin-left: 0.5rem;
    }
    .collection {
      font-size: 18px;
      line-height: 20px;
    }
  }
  .text-cgreen {
    color: #0d493d;
  }
</style>
