import React from 'react';
import { graphql } from 'gatsby';
import Link from 'gatsby-link';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import FormatHtml from 'components/utils/FormatHtml';

import * as Styled from './styles';

interface Course {
  html: React.ReactNode;
  fields: {
    slug: string;
  };
  frontmatter: {
    title: string;
    date: string;
  };
}

interface Props {
  data: {
    markdownRemark: Course;
  };
  pageContext: {
    slug: string;
    next: Course;
    previous: Course;
  };
}

const Course: React.FC<Props> = ({ data, pageContext }) => {
  const course = data.markdownRemark;
  const { previous, next } = pageContext;

  return (
    <Layout>
      <SEO title={course.frontmatter.title} />
      <Container section>
        <TitleSection title={course.frontmatter.date} subtitle={course.frontmatter.title} />
        <FormatHtml content={course.html} />
        <Styled.Links>
          <span>
            {previous && (
              <Link to={previous.fields.slug} rel="previous">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </span>
          <span>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </span>
        </Styled.Links>
      </Container>
    </Layout>
  );
};

export default Course;

export const query = graphql`
  query CourseBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMM DD, YYYY")
      }
    }
  }
`;
