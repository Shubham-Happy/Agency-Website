export function Section14() {
  return (
    <div className="container flex m-12">
      <div className="text-muted-foreground text-balance space-y-4">
        {/* 1. Information We Collect */}
        <section>
          <h3 className="font-semibold mb-1">1. Information We Collect</h3>
          <div className="ml-4 space-y-2">
            <div>
              <strong>1.1 Personal Information</strong>
              <ul className="list-disc list-inside ml-4">
                <li>Name</li>
                <li>Email address</li>
                <li>Social media account details</li>
                <li>Payment information (e.g., bank account or digital wallet details for payouts)</li>
                <li>Contact information</li>
              </ul>
            </div>
            <div>
              <strong>1.2 Non-Personal Information</strong>
              <p>
                We may also collect non-personal information, including but not limited to:
              </p>
              <ul className="list-disc list-inside ml-4">
                <li>Device type and operating system</li>
                <li>Browser type</li>
                <li>IP address</li>
                <li>Usage data (e.g., time spent on our platform, pages viewed, and interactions)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 2. How We Use Your Information */}
        <section>
          <h3 className="font-semibold mb-1">2. How We Use Your Information</h3>
          <p>We use your information for the following purposes:</p>
          <ul className="list-disc list-inside ml-4">
            <li>To create and manage your account</li>
            <li>To connect you with brands and products for promotional campaigns</li>
            <li>To track performance metrics such as sales generated from your content</li>
            <li>To process payments and provide earnings</li>
            <li>To communicate updates, promotional offers, or policy changes</li>
            <li>To analyze and improve our platform and services</li>
          </ul>
        </section>

        {/* 3. Sharing Your Information */}
        <section>
          <h3 className="font-semibold mb-1">3. Sharing Your Information</h3>
          <p>
            We do not sell or rent your personal information to third parties. However, we may share your information with:
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>
              <strong>Brands:</strong> To facilitate campaigns and track promotional content effectiveness.
            </li>
            <li>
              <strong>Service Providers:</strong> For payment processing, analytics, or other operational support.
            </li>
            <li>
              <strong>Legal Authorities:</strong> If required to comply with applicable laws, regulations, or legal processes.
            </li>
          </ul>
        </section>

        {/* 4. Data Retention */}
        <section>
          <h3 className="font-semibold mb-1">4. Data Retention</h3>
          <p>
            We retain your information for as long as your account is active or as needed to provide you with our services. We may also retain information to comply with legal obligations, resolve disputes, and enforce our agreements.
          </p>
        </section>

        {/* 5. Your Privacy Choices */}
        <section>
          <h3 className="font-semibold mb-1">5. Your Privacy Choices</h3>
          <p>You have the following rights regarding your personal information:</p>
          <ul className="list-disc list-inside ml-4">
            <li>
              <strong>Access and Update:</strong> You can review and update your account information.
            </li>
            <li>
              <strong>Opt-Out:</strong> You may opt out of promotional communications by following the instructions in the email or contacting us.
            </li>
            <li>
              <strong>Delete Account:</strong> You can request account deletion by contacting support. Please note that certain information may remain in our records to comply with legal obligations.
            </li>
          </ul>
        </section>

        {/* 6. Security Measures */}
        <section>
          <h3 className="font-semibold mb-1">6. Security Measures</h3>
          <p>
            We implement reasonable administrative, technical, and physical measures to protect your information. However, no method of transmission or storage is entirely secure, and we cannot guarantee absolute security.
          </p>
        </section>

        {/* 7. Third-Party Links */}
        <section>
          <h3 className="font-semibold mb-1">7. Third-Party Links</h3>
          <p>
            Our platform may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review their privacy policies before providing any personal information.
          </p>
        </section>

        {/* 8. Changes to This Privacy Policy */}
        <section>
          <h3 className="font-semibold mb-1">8. Changes to This Privacy Policy</h3>
          <p>
            We reserve the right to update this Privacy Policy at any time. Changes will be effective immediately upon posting the revised policy. Your continued use of our platform signifies your acceptance of the updated policy.
          </p>
        </section>
      </div>
    </div>
  );
}
