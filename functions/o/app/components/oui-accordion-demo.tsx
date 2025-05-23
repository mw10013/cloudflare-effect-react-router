import * as Oui from "@workspace/oui";
import * as Rac from "react-aria-components";

export function OuiAccordionDemo() {
  return (
    <div className="grid w-full max-w-xl gap-4">
      <Rac.DisclosureGroup className="w-full">
        <Oui.DisclosureEx id="item-1" title="Is it accessible?">
          Yes. It adheres to the WAI-ARIA design pattern.
        </Oui.DisclosureEx>
        <Oui.DisclosureEx id="item-2" title="Is it styled?">
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </Oui.DisclosureEx>
        <Oui.DisclosureEx id="item-3" title="Is it animated?">
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </Oui.DisclosureEx>
      </Rac.DisclosureGroup>
      <Rac.DisclosureGroup className="w-full">
        <Oui.DisclosureEx
          id="item-1-enterprise"
          title="What are the key considerations when implementing a comprehensive enterprise-level authentication system?"
        >
          Implementing a robust enterprise authentication system requires
          careful consideration of multiple factors. This includes secure
          password hashing and storage, multi-factor authentication (MFA)
          implementation, session management, OAuth2 and SSO integration,
          regular security audits, rate limiting to prevent brute force attacks,
          and maintaining detailed audit logs. Additionally, you&apos;ll need to
          consider scalability, performance impact, and compliance with relevant
          data protection regulations such as GDPR or HIPAA.
        </Oui.DisclosureEx>
        <Oui.DisclosureEx
          id="item-2-distributed"
          title="How does modern distributed system architecture handle eventual consistency and data synchronization across multiple regions?"
        >
          Modern distributed systems employ various strategies to maintain data
          consistency across regions. This often involves using techniques like
          CRDT (Conflict-Free Replicated Data Types), vector clocks, and gossip
          protocols. Systems might implement event sourcing patterns, utilize
          message queues for asynchronous updates, and employ sophisticated
          conflict resolution strategies. Popular solutions like Amazon&apos;s
          DynamoDB and Google&apos;s Spanner demonstrate different approaches to
          solving these challenges, balancing between consistency, availability,
          and partition tolerance as described in the CAP theorem.
        </Oui.DisclosureEx>
      </Rac.DisclosureGroup>
    </div>
  );
}
