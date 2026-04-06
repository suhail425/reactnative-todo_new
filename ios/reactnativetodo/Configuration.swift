/*
 * Copyright (c) 2024 - 2025 Ping Identity Corporation. All rights reserved.
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

/**
 A struct that holds the configuration constants for the authentication journey.
 */
public struct Configuration {
    /// The main authentication journey name.
    public let mainAuthenticationJourney: String
    /// The URL of the authentication server.
    public let amURL: String
    /// The name of the cookie used for authentication.
    public let cookieName: String
    /// The realm used for authentication.
    public let realm: String
    /// The OAuth client ID.
    public let oauthClientId: String
    /// The OAuth redirect URI.
    public let oauthRedirectURI: String
    /// The OAuth scopes.
    public let oauthScopes: String
    /// The discovery endpoint for OAuth configuration.
    public let discoveryEndpoint: String
    /// The registration service ID
    public let registrationServiceId: String

    /// Initializer to provide external configuration.
    public init(
        mainAuthenticationJourney: String = "userLogin",
        amURL: String = "https://dsp-uat.sab.com/am",
        cookieName: String = "AMToken",
        realm: String = "external",
        oauthClientId: String = "rmb_sdk_client",
        oauthRedirectURI: String = "https://com.example.reactnative.todo/callback",
        oauthScopes: String = "openid",
        discoveryEndpoint: String = "https://dsp-uat.sab.com/am/oauth2/realms/root/realms/external/.well-known/openid-configuration",
        registrationServiceId: String = "Registration"
    ) {
        self.mainAuthenticationJourney = mainAuthenticationJourney
        self.amURL = amURL
        self.cookieName = cookieName
        self.realm = realm
        self.oauthClientId = oauthClientId
        self.oauthRedirectURI = oauthRedirectURI
        self.oauthScopes = oauthScopes
        self.discoveryEndpoint = discoveryEndpoint
        self.registrationServiceId = registrationServiceId
    }
}

