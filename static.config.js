import React, { Component } from 'react'
// This file is used to configure:
// - static-site generation
// - Document shell (index.html)
// - ...tons of other things!

// Get started at httsp://react-static.js.org

export default {
  maxThreads: 1, // Remove this when you start doing any static generation
  plugins: ['react-static-plugin-sass'],
  Document: ({
    Html,
    Head,
    Body,
    children,
    state: { siteData, renderMeta },
    }) => (
    <Html lang="en-US">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="http://fonts.googleapis.com/css?family=Alegreya+Sans:400,500,700,300,300italic" rel="stylesheet" type="text/css"/>

        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8"/>
        <meta name="author" content="André Veríssimo"/>
        <meta name="description" content="Personal webpage of André Veríssimo"/>
        <meta name="keywords" content="student,tecnico,website,graduate,andré veríssimo"/>
      </Head>
      <Body>{children}</Body>
    </Html>
  ),
}
